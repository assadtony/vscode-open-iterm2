# Open Tower For VSCode

![open_vscode](https://raw.githubusercontent.com/assadtony/vscode-open-vscode/master/res/img1.png)

## How to get your Token from Marketplace
- Login to your organization. Something like: https://dev.azure.com/assadtony
- Go to your profile > User Settings > Security > Personal Access Tokens
- Add a new Token and select "All Accessible Organizations"
- Copy the Token
- Add the token to your Env Variables using `export VSCTOKEN=XX` replacing the `XX` with the `token value`

## How to Install locally
- Install `npm install -g vsce`
- Run `vsce package`
- A `*.vsix` should have been generated
- Inside VSC, `CMMD+SHIFT+P` > `Extensions: Install from VSIX` > Select `*.vsix` generated in the previous step.

## How to Publish
- Install `npm install -g vsce`
- Make sure you have your token on your Env variables `printenv VSCTOKEN`
- If you don't have it setup follow the instructions above.
- Run `yarn vscode:publish`
- Published