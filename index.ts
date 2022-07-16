import { Select } from "https://deno.land/x/cliffy@v0.24.2/prompt/select.ts";

// get aws profiles from /.aws/config
const getProfiles = () =>
  Deno.readTextFile(Deno.env.get("HOME") + "/.aws/config");

// choose aws profile
const chooseProfile = (profiles: string) => {
  const matches = profiles.match(/\[profile .*]/g);

  if (!matches) {
    console.log("No profiles found, please make sure they are configured.");
    return "";
  }

  return Select.prompt({
    message: "Please choose a profile",
    options: [
      "default",
      ...matches.map((match) => match.replace(/(\[profile )|(])/g, "")),
    ],
  });
};

// write aws profile to .awsp and set aws profile
const setProfile = async (profile: string) =>
  await Deno.writeTextFile(Deno.env.get("HOME") + "/.awsp", profile);

getProfiles()
  .then(chooseProfile)
  .then(setProfile)
  .catch((error) => {
    console.log("Error: ", error);
    Deno.exit(1);
  });
