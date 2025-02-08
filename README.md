# Chungus FE
If you wanna build this you need to install nodejs 14 and yarn for the version of npm nodejs 14 ships

# Building
```
$ cd chungus-fe
$ yarn
$ sed -i "s/brain.worm.pink/your.instance.com/" src/modules.instance.js # pointed at the gortsite by default, logging in will not work without changing this
$ npm run build
```
This will spit out a dist/ folder with the built files

# Hosting on a seperate server/reverse proxying
Surprisingly CSP doesn't stop you from pointing an FE at another server and using that FE.
[You can modify this example from the Pleroma documentation to proxy traffic the FE domain off to your own instance](https://docs.pleroma.social/frontend/HACKING/#running-production-build-locally-or-on-a-separate-server)

# Installing as primary frontend
[Why would you want to do this?](https://docs.pleroma.social/frontend/HACKING/#new-way-via-adminfe-a-bit-janky-but-works)
