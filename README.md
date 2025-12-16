# Spatial Bootstrap Example

An example **WebSpatial** application that showcases **Spatial Bootstrap**.

##  Getting Started

Since this app uses WebSpatial, check here for device requirements / FAQ: https://webspatial.dev/

This project assumes you're on at least: macOS 26.1, XCode 26.1, with visionOS 26.2 simulator installed.


### **Install dependencies**

```bash
npm install
```

### **Build app for Apple Vision Pro Simulator**
```bash
npm run build:avp
```

> 
> #### NOTE:
> If you see build issues regarding the CodeSign of `node_modules/.webspatial-builder-temp/platform-visionos/test/Build/Products/Debug-xrsimulator/RealityKitContent_RealityKitContent.bundle`, you can disabled CodeSigning by replacing the following lines in `node_modules/@webspatial/builder/dist/lib/xcode/xcrun.js`:
>
> #### Before
> ```js
> const buildCMD = new xcodebuild_1.XcodebuildCMD().project(projectFile).line +
>     ` build -scheme web-spatial -destination 'platform=visionOS Simulator,id=${deviceId}' -derivedDataPath ${resource_1.PROJECT_TEST_DIRECTORY}`;
> 
> ```
> 
> #### After
> ```js
> const buildCMD = new xcodebuild_1.XcodebuildCMD().project(projectFile).line +
>     ` clean build -scheme web-spatial -destination 'platform=visionOS Simulator,id=${deviceId}' -derivedDataPath ${resource_1.PROJECT_TEST_DIRECTORY} \
>         CODE_SIGNING_ALLOWED=NO CODE_SIGNING_REQUIRED=NO`;
> ```
> 

### **Start development server**

```bash
npm run dev:avp
```

Runs on a local HTTPS server at:
**[https://localhost:3000](https://localhost:3000)**
