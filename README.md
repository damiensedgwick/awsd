# AWSD

awsd is a shameless clone of [awsp](https://github.com/johnnyopao/awsp) but written in Deno.

My motivation for this is that I use awsp frequently however I needed to extend it so that I am able to run some
additional processes after the aws profile has been set. 

*These extensions have been removed from this repository as they contain information relating to my work.*

Additionally, by rewriting in Deno, I have been able to provide the same functionality to awsp but with no other
dependencies such as Node or global NPM installs.

## Installation
Get the latest executable from the releases.

Add `awsd` and `awsd.sh` to your path `/usr/local/bin` and add the following alias to your bash profile

`alias awsd="source awsd.sh"`

*note:* **This tool has been written on macOS and its intended use is for macOS. I am fairly certain it will not work on 
Linux or Windows however I welcome any contributions to make it so.**

## Usage
If the above has been done correctly, you should now be able to run `awsd` and select the aws profile you want to use.

Johnny recommends setting up some additional terminal fonts, so you can see the aws profile clearly, I like to use
[starship.rs](https://starship.rs/) for this as it is highly customisable.

## NB
Once again, I want to emphasise that I am not the original author of this tool and that all props should be
given to [johnny](https://github.com/johnnyopao) and if you haven't done so before, check out his original 
[awsp](https://github.com/johnnyopao/awsp) aws profile switcher.
