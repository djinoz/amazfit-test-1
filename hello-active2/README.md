# Hello Active 2 ZeppOS sample

This folder contains a minimal ZeppOS mini program that renders a centered "Hello, Active 2!" message on devices such as the Amazfit Active 2.

The layout is built at runtime in `pages/index/index.js` using the `hmUI.createWidget` API so that it works on round or rectangular displays.

## Project structure

```
hello-active2/
├── app.json              # Mini program manifest with metadata and page list
├── app.js                # Application lifecycle entry point
├── assets/
│   └── README.txt        # Instructions for providing an icon (app.png)
├── i18n/
│   └── en-US.po          # Localized strings used by gettext()
└── pages/
    └── index/
        ├── index.js      # Page logic that renders the hello world text
        └── index.page    # Optional declarative page configuration (background)
```

## Prerequisites

1. Install the [ZeppOS Developer IDE](https://docs.zepp.com/docs/tools/zeppos-ide/) or the CLI (`@zeppos/zeus-cli`).
2. Set up a developer certificate and pair your Amazfit Active 2 with the Zepp developer tools following the instructions in the ZeppOS documentation.

## Running on device or emulator

### Using the ZeppOS IDE

1. Open the ZeppOS IDE and choose **Import Project**.
2. Select the `hello-active2` directory.
3. Provide an icon named `app.png` (192×192) inside `hello-active2/assets/` if you have not already.
4. Press **Build & Install** to deploy the app to the watch or to the IDE emulator.

### Using the CLI

If you prefer the CLI, the workflow is similar:

```bash
npm install -g @zeppos/zeus-cli
cd hello-active2
zeus clean
zeus build
zeus install --device active_2
```

The `zeus install` step assumes that the Active 2 has been paired and authorized via the Zepp developer tools.

## Customizing

* To change the text, update the `msgstr` in `i18n/en-US.po`.
* Adjust positioning or font settings by editing the widget configuration inside `pages/index/index.js`.
* Add more pages by listing them in the `module.pages` array inside `app.json` and creating a corresponding folder under `pages/`.

## Packaging for release

When you are ready to share the app, run `zeus package`. The command produces an `.app` bundle that can be uploaded to the ZeppOS developer console for distribution or sideloaded onto the watch.
