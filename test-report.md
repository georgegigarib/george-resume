# Test Report

| 🕙 Start time | ⌛ Duration |
| --- | ---: |
| 3/14/2025, 1:01:14 PM | 22.287 s |

| | ✅ Passed | ❌ Failed | ⏩ Skipped | 🚧 Todo | ⚪ Total |
| --- | ---: | ---: | ---: | ---: | ---: |
|Test Suites|102|0|4|0|106|
|Tests|164|0|7|0|171|

## ✅ <a id="file0" href="#file0">src/app/layout/__tests__/NavBar.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/app/layout/__tests__/NavBar.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 59.71112499999981 s

```
✅ NavBar component
   ✅ renders correctly on desktop
```

## ⏩ <a id="file1" href="#file1">src/app/pages/__tests__/Dashboard.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/app/pages/__tests__/Dashboard.spec.tsx)]

0 passed, 0 failed, 1 skipped, 0 todo, done in 0 s

```
⏩ Dashboard component
   ⏩ renders correctly on desktop
```

## ✅ <a id="file2" href="#file2">src/components/atoms/__tests__/CardBody.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/CardBody.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 44.21083300000009 s

```
✅ CardBody component
   ✅ matches the snapshot
   ✅ renders children correctly
   ✅ applies additional className
   ✅ has the default styles applied
```

## ✅ <a id="file3" href="#file3">src/components/atoms/__tests__/CardContainer.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/CardContainer.spec.tsx)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 112.29250000000002 s

```
✅ CardContainer component
   ✅ matches the snapshot
   ✅ handles mouse movement
```

## ✅ <a id="file4" href="#file4">src/components/atoms/__tests__/DarkModeSwitch.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/DarkModeSwitch.spec.tsx)]

8 passed, 0 failed, 0 skipped, 0 todo, done in 147.12016700000004 s

```
✅ ThemeSwitch component
   ✅ matches snapshot
   ✅ renders with the correct initial checked state
   ✅ calls onChange when the checkbox is clicked
   ✅ applies the correct size based on the size prop
   ✅ applies the default size when size prop is not provided
   ✅ toggles the checked state correctly when clicked
   ✅ renders the correct structure for child elements
   ✅ applies the correct styles based on the checked state
```

## ✅ <a id="file5" href="#file5">src/components/atoms/__tests__/DevLink.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/DevLink.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 101.38454200000001 s

```
✅ DevLink component
   ✅ matches the snapshot when activeHash is Sections.Dev
   ✅ matches the snapshot when activeHash is Sections.Music
   ✅ matches the snapshot when activeHash is Sections.Me
   ✅ calls scrollToSection and setAutomaticScroll on click
```

## ✅ <a id="file6" href="#file6">src/components/atoms/__tests__/ImageLoader.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/ImageLoader.spec.tsx)]

5 passed, 0 failed, 0 skipped, 0 todo, done in 80.57600000000002 s

```
✅ ImageWithLoader component
   ✅ renders the loader initially
   ✅ renders the image after it has loaded
   ✅ applies the provided class name and style
   ✅ sets the data-testid attribute correctly
   ✅ sets the alt attribute correctly
```

## ✅ <a id="file7" href="#file7">src/components/atoms/__tests__/LanguageSwitcher.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/LanguageSwitcher.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 343.4172090000002 s

```
✅ LanguageSwitcher component
   ✅ matches the snapshot
   ✅ opens the menu when button is clicked
   ✅ changes language when an option is selected
```

## ✅ <a id="file8" href="#file8">src/components/atoms/__tests__/MeLink.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/MeLink.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 60.21366699999999 s

```
✅ MeLink component
   ✅ matches the snapshot when activeHash is Sections.Dev
   ✅ matches the snapshot when activeHash is Sections.Music
   ✅ matches the snapshot when activeHash is Sections.Me
   ✅ calls scrollToSection and setAutomaticScroll on click
```

## ✅ <a id="file9" href="#file9">src/components/atoms/__tests__/MouseEnterContext.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/MouseEnterContext.spec.tsx)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 87.77670799999999 s

```
✅ MouseEnterProvider
   ✅ should provide mouse enter state to its children
   ✅ should throw error if useMouseEnter is used outside of MouseEnterProvider
```

## ✅ <a id="file10" href="#file10">src/components/atoms/__tests__/MusicLink.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/MusicLink.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 52.09854199999995 s

```
✅ MusicLink component
   ✅ matches the snapshot when activeHash is Sections.Dev
   ✅ matches the snapshot when activeHash is Sections.Music
   ✅ matches the snapshot when activeHash is Sections.Me
   ✅ calls scrollToSection and setAutomaticScroll on click
```

## ✅ <a id="file11" href="#file11">src/components/atoms/__tests__/ProjectInfo.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/ProjectInfo.spec.tsx)]

6 passed, 0 failed, 0 skipped, 0 todo, done in 628.2576250000002 s

```
✅ ProjectInfo component
   ✅ matches the snapshot for desktop view
   ✅ matches the snapshot for mobile view
   ✅ renders the project title and description for desktop view
   ✅ renders the project title and description for mobile view
   ✅ renders the project URL
   ✅ renders the technology badges
```

## ✅ <a id="file12" href="#file12">src/components/atoms/__tests__/TechnologyBadge.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/TechnologyBadge.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 77.36516700000038 s

```
✅ TechnologyBadge component
   ✅ matches the snapshot for a light theme
   ✅ matches the snapshot for a dark theme
   ✅ renders correctly with the correct tool data
   ✅ does not render if tool data is not found
```

## ✅ <a id="file13" href="#file13">src/components/atoms/__tests__/ThreeDImageSlider.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/ThreeDImageSlider.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 148.59741600000007 s

```
✅ ThreeDImageSlider component
   ✅ matches the snapshot for desktop mode
   ✅ matches the snapshot for mobile mode
   ✅ renders the correct number of images
   ✅ calls onClick when an image is clicked
```

## ✅ <a id="file14" href="#file14">src/components/atoms/__tests__/ToggleProjectsViewButton.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/ToggleProjectsViewButton.spec.tsx)]

5 passed, 0 failed, 0 skipped, 0 todo, done in 792.3004169999999 s

```
✅ ToggleProjectsViewButton component
   ✅ matches the snapshot for desktop mode
   ✅ matches the snapshot for mobile mode
   ✅ renders the correct icon for desktop mode
   ✅ renders the correct icon for mobile mode
   ✅ calls onClick when the button is clicked
```

## ✅ <a id="file15" href="#file15">src/components/atoms/__tests__/ToolIcon.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/atoms/__tests__/ToolIcon.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 78.56062499999962 s

```
✅ ToolIcon component
   ✅ matches the snapshot for a default size
   ✅ matches the snapshot for a custom size
   ✅ renders the correct icon for a known tool
   ✅ renders nothing for an unknown tool
```

## ✅ <a id="file16" href="#file16">src/components/molecules/__tests__/Card.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/Card.spec.tsx)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 42.02404100000001 s

```
✅ Card component
   ✅ renders the content passed as props
   ✅ renders with the correct classes
```

## ✅ <a id="file17" href="#file17">src/components/molecules/__tests__/ClickableTooltip.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/ClickableTooltip.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 256.2354999999998 s

```
✅ ClickableTooltip component
   ✅ matches the snapshot for desktop view
   ✅ matches the snapshot for mobile view
   ✅ renders the tooltip text on hover
   ✅ renders the tooltip text on click for mobile view
```

## ✅ <a id="file18" href="#file18">src/components/molecules/__tests__/CustomTooltip.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/CustomTooltip.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 297.12466700000004 s

```
✅ CustomTooltip component
   ✅ matches the snapshot
   ✅ renders the tooltip title on hover
   ✅ removes tooltip message when mouse leave
```

## ✅ <a id="file19" href="#file19">src/components/molecules/__tests__/DevTemplatesOption.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/DevTemplatesOption.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 221.56004200000007 s

```
✅ DevTemplatesOption component
   ✅ matches the snapshot for desktop view
   ✅ matches the snapshot for mobile view
   ✅ renders the correct number of technology badges for desktop view
   ✅ renders the correct number of technology badges for mobile view
```

## ✅ <a id="file20" href="#file20">src/components/molecules/__tests__/DevTemplatesPreModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/DevTemplatesPreModal.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 67.56712500000003 s

```
✅ DevTemplatesPreModal component
   ✅ matches the snapshot
```

## ✅ <a id="file21" href="#file21">src/components/molecules/__tests__/ListOfDesktopProjectsPreModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/ListOfDesktopProjectsPreModal.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 500.39987500000007 s

```
✅ ListOfDesktopProjectsPreModal Component
   ✅ renders correctly with desktop projects
   ✅ renders titles correctly
   ✅ renders correctly with mobile projects tools
   ✅ displays the project image
```

## ✅ <a id="file22" href="#file22">src/components/molecules/__tests__/ListOfMobileProjectsPreModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/ListOfMobileProjectsPreModal.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 242.0497919999998 s

```
✅ ListOfMobileProjectsPreModal Component
   ✅ renders correctly
   ✅ renders correctly with mobile projects titles
   ✅ renders correctly with mobile projects descrition
   ✅ displays the project image
```

## ⏩ <a id="file23" href="#file23">src/components/molecules/__tests__/ListOfProjectsThreeDSlider.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/ListOfProjectsThreeDSlider.spec.tsx)]

0 passed, 0 failed, 4 skipped, 0 todo, done in 0 s

```
⏩ ListOfProjectsThreeDSlider Component
   ⏩ renders correctly
   ⏩ renders correctly with desktop projects
   ⏩ renders correctly with mobile projects
   ⏩ toggles between desktop and mobile view
```

## ✅ <a id="file24" href="#file24">src/components/molecules/__tests__/TemplatesCarousels.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/TemplatesCarousels.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 100.15750000000025 s

```
✅ TemplatesCarousels Component
   ✅ renders correctly with provided templates
```

## ✅ <a id="file25" href="#file25">src/components/molecules/__tests__/ThemeSwitcher.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/molecules/__tests__/ThemeSwitcher.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 120.1781669999998 s

```
✅ ThemeSwitcher component
   ✅ matches the snapshot when dark mode is enabled
   ✅ matches the snapshot when dark mode is disabled
   ✅ dispatches the correct action when toggling the theme
   ✅ dispatches the correct action when toggling the theme off
```

## ✅ <a id="file26" href="#file26">src/components/organisms/__tests__/Box.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/Box.spec.tsx)]

5 passed, 0 failed, 0 skipped, 0 todo, done in 112.77204099999994 s

```
✅ Box component
   ✅ matches the snapshot
   ✅ renders the content directly when useCard is false
   ✅ applies shadow classes when addShadow is true
   ✅ does not apply shadow classes when addShadow is false
   ✅ applies correct gridArea style based on props
```

## ✅ <a id="file27" href="#file27">src/components/organisms/__tests__/DashboardImageContainer.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/DashboardImageContainer.spec.tsx)]

5 passed, 0 failed, 2 skipped, 0 todo, done in 289.1709999999998 s

```
✅ DashboardImageContainer component
   ✅ matches the snapshot for desktop view in light mode
   ✅ matches the snapshot for mobile view in light mode
   ✅ matches the snapshot for desktop view in dark mode
   ✅ matches the snapshot for mobile view in dark mode
   ✅ renders the image with correct src
   ⏩ applies the correct styles based on mobile and dark mode
   ⏩ applies the correct styles based on desktop and light mode
```

## ✅ <a id="file28" href="#file28">src/components/organisms/__tests__/DevTemplatesModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/DevTemplatesModal.spec.tsx)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 159.7129170000003 s

```
✅ DevTemplatesModal component
   ✅ matches the snapshot when modal is open
   ✅ renders the correct templates hint
```

## ✅ <a id="file29" href="#file29">src/components/organisms/__tests__/ExcampleComponent.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/ExcampleComponent.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 267.69062499999995 s

```
✅ ExampleComponent
   ✅ matches the snapshot
   ✅ renders the component with a random class
   ✅ renders the image correctly
   ✅ generates a different random class on re-render
```

## ✅ <a id="file30" href="#file30">src/components/organisms/__tests__/Jokes.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/Jokes.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 142.82470899999998 s

```
✅ Jokes Component
   ✅ matches the snapshot
   ✅ changes the joke after the interval
   ✅ changes the joke when refresh button is clicked
```

## ✅ <a id="file31" href="#file31">src/components/organisms/__tests__/LatestSong.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/LatestSong.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 157.60349999999994 s

```
✅ LatestSong Component
   ✅ matches snapshot at initial render
   ✅ matches snapshot after 5 seconds
   ✅ matches snapshot after another 5 seconds
```

## ✅ <a id="file32" href="#file32">src/components/organisms/__tests__/ListOfDesktopProjectsModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/ListOfDesktopProjectsModal.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 498.3625000000002 s

```
✅ ListOfDesktopProjectsModal component
   ✅ matches the snapshot for desktop view
   ✅ matches the snapshot for mobile view
   ✅ renders the correct content for desktop view
   ✅ renders the correct content for mobile view
```

## ✅ <a id="file33" href="#file33">src/components/organisms/__tests__/ListOfMobileProjectsModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/ListOfMobileProjectsModal.spec.tsx)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 588.866583 s

```
✅ ListOfMobileProjectsModal component
   ✅ matches the snapshot for desktop view
   ✅ matches the snapshot for mobile view
   ✅ renders the correct content for desktop view
   ✅ renders the correct content for mobile view
```

## ✅ <a id="file34" href="#file34">src/components/organisms/__tests__/ListOfProjectsModal.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/ListOfProjectsModal.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 115.21816599999988 s

```
✅ ListOfProjectsModal component
   ✅ matches the snapshot
```

## ✅ <a id="file35" href="#file35">src/components/organisms/__tests__/NavBarDropDownMenu.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/NavBarDropDownMenu.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 939.6495829999999 s

```
✅ DropdownMenu Component
   ✅ matches snapshot
   ✅ opens the menu when the button is clicked
   ✅ closes the menu when clicked outside
```

## ✅ <a id="file36" href="#file36">src/components/organisms/__tests__/Presentation.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/Presentation.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 24.145582999999988 s

```
✅ Presentation component
   ✅ matches the snapshot
```

## ✅ <a id="file37" href="#file37">src/components/organisms/__tests__/SeeResume.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/SeeResume.spec.tsx)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 249.33675000000017 s

```
✅ SeeResume Component
   ✅ renders correctly for mobile
   ✅ renders correctly for desktop
```

## ✅ <a id="file38" href="#file38">src/components/organisms/__tests__/SpotifyPlaylist.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/SpotifyPlaylist.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 197.36549999999988 s

```
✅ SpotifyPlaylist Component
   ✅ matches the snapshot
   ✅ renders correctly in mobile view
   ✅ renders correctly in desktop view
```

## ✅ <a id="file39" href="#file39">src/components/organisms/__tests__/YoutubeVideo.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/organisms/__tests__/YoutubeVideo.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 144.26966600000014 s

```
✅ LocalVideoWithTooltip Component
   ✅ renders correctly and displays loading indicator initially
   ✅ matches snapshot
   ✅ shows tooltip when activeHash matches and after timeout
```

## ✅ <a id="file40" href="#file40">src/components/sections/__tests__/CenterSection.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/sections/__tests__/CenterSection.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 104.73199999999997 s

```
✅ CenterSection component
   ✅ renders correctly on desktop
```

## ✅ <a id="file41" href="#file41">src/components/sections/__tests__/LeftSection.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/sections/__tests__/LeftSection.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 239.3249169999999 s

```
✅ LeftSection component
   ✅ renders correctly on desktop
```

## ✅ <a id="file42" href="#file42">src/components/sections/__tests__/RightSection.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/components/sections/__tests__/RightSection.spec.tsx)]

1 passed, 0 failed, 0 skipped, 0 todo, done in 207.97979199999963 s

```
✅ RightSection component
   ✅ renders correctly on desktop
```

## ✅ <a id="file43" href="#file43">src/hooks/__tests__/useIsMobile.spec.tsx</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/hooks/__tests__/useIsMobile.spec.tsx)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 37.13545799999997 s

```
✅ useIsMobile
   ✅ should return true if the window width is less than the breakpoint
   ✅ should return false if the window width is greater than or equal to the breakpoint
   ✅ should update the view when the window is resized
```

## ✅ <a id="file44" href="#file44">src/hooks/__tests__/useLanguage.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/hooks/__tests__/useLanguage.spec.ts)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 17.04320800000005 s

```
✅ useLanguage
   ✅ should change the language and save it to localStorage
   ✅ should load the language from localStorage
   ✅ should return the current language from localStorage
   ✅ should return "en" if no language is in localStorage
```

## ✅ <a id="file45" href="#file45">src/locales/__tests__/i18n.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/locales/__tests__/i18n.spec.ts)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 5.690375000000017 s

```
✅ i18n configuration
   ✅ should initialize i18n with the correct configuration
   ✅ should have parseMissingKeyHandler that returns an empty string
```

## ✅ <a id="file46" href="#file46">src/locales/__tests__/language.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/locales/__tests__/language.spec.ts)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 1.8960409999999683 s

```
✅ languages
   ✅ should have correct configuration for language { lang: 'en', name: 'English', translation: { hello: 'Hey buddy, whats upp?', welcome: 'Hello friend', description: 'This is a description in English', navbar: { me: 'me', music: 'music', dev: 'dev' }, music: { favoritePlaylist: { title: 'My Favorite Playlist', description: 'Enjoy my personal selection of songs in this playlist. Listen to it and let yourself be carried away by the rhythm!' }, video: { clickMe: 'Click me!', seeFullVideo: 'See full video' } }, me: { presentation: { title: 'Hi! I\'m George Gil', description: 'I\'m a curious software engineer who also plays guitar, not always at the same time though.' }, jokes: { joke1: 'I decided to create this presentation because, let\'s face it, my jokes aren’t as good as my code... but here we are.', joke2: 'Honestly, putting together a page about myself is way less awkward than trying to have a conversation with myself.', joke3: 'In theory, I’m an expert... but since I’m better at doing than explaining, I figured it’s best to just show you.', joke4: 'Some people make presentations to impress, I made mine to avoid talking... (didn\'t work anyway).' } }, dev: { resume: { resume: 'Resume', name: 'George Gil' }, projects: { title: 'Self taste projects', seeMore: 'See more', showAllProjects: 'Show all projects', moreTools: { toolsRemaining_one: '{{count}} more tool', toolsRemaining_other: '{{count}} more tools' }, modal: { sliderHint: 'Don\'t be shy... spin it!', usedTechnologies: 'Used Tecnologies', tooltip: 'Here you can see some of the projects I have worked on, using different technologies and maintaining good practices in each project. Clicking on each image will show the details of the project.' }, projects: { mobile: { title: 'Self taste projects 📱', project1: { title: 'Movie App', description: 'Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long and I have to keep extending it more and more and more.' }, project2: { title: 'Mobile Project 1', description: 'Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long.' }, project3: { title: 'Mobile Project 2', description: 'Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long. Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long.' }, project4: { title: 'Mobile Project 2', description: 'Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long. Application to explore movies and series. Here I\'m adding a slightly longer description to test what happens if the text is very long.' }, project5: { title: 'Mobile Project 1', description: 'Project with custom animations.' }, exampleProject: { title: 'Example mobile project', description: 'Example mobile project description' } }, desktop: { title: 'Self taste projects 🖥️', project1: { title: 'Desktop Project 1', description: 'Advanced dashboard.' }, project2: { title: 'Desktop Project 2', description: 'Custom desktop application. Custom desktop application. Custom desktop application. Custom desktop application. Custom desktop application. Custom desktop application. Custom desktop application. Custom desktop application.' }, project3: { title: 'Desktop Project 3', description: 'Custom desktop application.' }, project4: { title: 'Desktop Project 2', description: 'Custom desktop application.' }, project5: { title: 'Desktop Project 2', description: 'Custom desktop application.' }, project6: { title: 'Desktop Project 2', description: 'Custom desktop application.' }, exampleProject: { title: 'Example desktop project', description: 'Example desktop project description' } } } }, templates: { tooltip: { showAllTemplates: 'Show all templates', seeTemplate: 'See template' }, title: 'Use my dev templates!', modal: { title: 'Templates list', showAllTools: 'Show all tools', tooltip: 'It\'s way easier when you have a starting point when developing new projects, and mostof the time we waste a lot of time setting and configuring the project... That\'s why I made this section, to save a LOT of time. All technologies are listed on each repository. Happy coding! 😄' }, templates: { template1: { description: 'A lightweight template designed for fast rendering with modern tools.', hint: 'fast rendering' }, template2: { description: 'A server-side rendering starter template using Next.js and Docker.', hint: 'server rendering' }, template3: { description: 'A clean Vue.js starter with Pinia and TailwindCSS for simplicity and scalability.', hint: 'vue simplicity' }, template4: { description: 'A robust template for building enterprise-grade Angular applications.', hint: 'enterprise apps' }, template5: { description: 'Full-stack development made easy with React, MUI, and GraphQL backend.', hint: 'full stack' }, template6: { description: 'A minimalist yet powerful template using Svelte and Python with a PostgreSQL database.', hint: 'minimalist setup' }, template7: { description: 'A ready-to-use base for building eCommerce solutions with React and PHP.', hint: 'ecommerce base' }, template8: { description: 'A powerful template for data-intensive applications using MongoDB and GraphQL.', hint: 'data intensive' }, template9: { description: 'A template for real-time apps with Firebase backend and React frontend.', hint: 'real-time apps' }, exampleTemplate: { description: 'Example template description', hint: 'Example template hint' } } } } } }
   ✅ should have correct configuration for language { lang: 'es', name: 'Español', translation: { hello: 'Hola amigo, que tal?', underConstruction: '🚧', welcomes: 'Plural', description: 'Esta es una descripción en español', navbar: { me: 'yo', music: 'música', dev: 'dev' }, music: { favoritePlaylist: { title: 'Mi Playlist Favorita', description: 'Disfruta de mi selección personal de canciones en esta playlist. ¡Escúchala y déjate llevar por el ritmo!' }, video: { clickMe: 'Clickeame!', seeFullVideo: 'Ver video completo' } }, me: { presentation: { title: '¡Hola! Soy George Gil', description: 'Soy un curioso ingeniero de software que también toca la guitarra, aunque no siempre al mismo tiempo.' }, jokes: { joke1: 'Decidí hacer esta presentación porque, siendo sinceros, mis chistes no son tan buenos como mi código... pero aquí estamos.', joke2: 'A decir verdad, crear una página sobre mí mismo es mucho menos incómodo que tener una conversación conmigo mismo.', joke3: 'En teoría, soy un experto... en la práctica, como soy mejor haciendo que explicando, mejor les muestro.', joke4: 'Algunos hacen presentaciones para impresionar, yo la hice para evitar hablar... aunque tampoco lo conseguí del todo.' } }, dev: { resume: { resume: 'Curriculum', name: 'George Gil' }, projects: { title: 'Proyectos particulares', seeMore: 'Ver más', showAllProjects: 'Mostrar todos los proyectos', moreTools: { toolsRemaining_one: '{{count}} tecnología más', toolsRemaining_other: '{{count}} tecnologías más' }, modal: { sliderHint: 'Adelante... gíralo!', usedTechnologies: 'Tecnologias utilizadas', tooltip: 'Acá podran ver algunos de los proyectos en los que he trabajado, utilizando diferentes tecnologías y manteniendo las buenas practicas en cada proyecto. Al hacer click en cada imagen se mostrarán los detalles del proyecto.' }, projects: { mobile: { title: '📱 Proyectos particulares', project1: { title: 'Movie App', description: 'Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto y debo alargarlo más y más y más.' }, project2: { title: 'Proyecto Mobile 1', description: 'Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto.' }, project3: { title: 'Proyecto Mobile 2', description: 'Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto. Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto.' }, project4: { title: 'Proyecto Mobile 2', description: 'Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto. Aplicación para explorar películas y series. Aquí estoy dejando una descripción un poco más larga para probar qué pasa si es muy largo el texto.' }, project5: { title: 'Proyecto Mobile 1', description: 'Proyecto con animaciones personalizadas.' } }, desktop: { title: '🖥️  Proyectos particulares', project1: { title: 'Proyecto Desktop 1', description: 'Dashboard avanzado.' }, project2: { title: 'Proyecto Desktop 2', description: 'Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada. Aplicación de escritorio personalizada.' }, project3: { title: 'Proyecto Desktop 3', description: 'Aplicación de escritorio personalizada.' }, project4: { title: 'Proyecto Desktop 2', description: 'Aplicación de escritorio personalizada.' }, project5: { title: 'Proyecto Desktop 2', description: 'Aplicación de escritorio personalizada.' }, project6: { title: 'Proyecto Desktop 2', description: 'Aplicación de escritorio personalizada.' } } } }, templates: { title: '¡Usa mis plantillas de desarrollo!', tooltip: { showAllTemplates: 'Mostrar todas las plantillas', seeTemplate: 'Ver plantilla' }, modal: { title: 'Lista de plantillas', showAllTools: 'Mostrar Todas las tecnologías', tooltip: 'Es mucho más fácil cuando tienes un punto de partida al desarrollar nuevos proyectos, y la mayoría de las veces perdemos mucho tiempo configurando el mismo... Por eso hice esta sección, para ahorrar MUCHO tiempo. Todas las tecnologías están listadas en cada repositorio. ¡Feliz codificación! 😄' }, templates: { template1: { description: 'Una plantilla ligera diseñada para renderizado rápido con herramientas modernas.', hint: 'renderizado rápido' }, template2: { description: 'Una plantilla inicial de renderizado en el lado del servidor usando Next.js y Docker.', hint: 'renderizado en servidor' }, template3: { description: 'Un inicio limpio en Vue.js con Pinia y TailwindCSS para simplicidad y escalabilidad.', hint: 'simplicidad en vue' }, template4: { description: 'Una plantilla robusta para construir aplicaciones empresariales con Angular.', hint: 'aplicaciones empresariales' }, template5: { description: 'Desarrollo full-stack simplificado con React, MUI y un backend GraphQL.', hint: 'full stack' }, template6: { description: 'Una plantilla minimalista pero poderosa usando Svelte y Python con una base de datos PostgreSQL.', hint: 'configuración minimalista' }, template7: { description: 'Una base lista para usar en la creación de soluciones de comercio electrónico con React y PHP.', hint: 'base para ecommerce' }, template8: { description: 'Una plantilla poderosa para aplicaciones intensivas en datos usando MongoDB y GraphQL.', hint: 'aplicaciones intensivas en datos' }, template9: { description: 'Una plantilla para aplicaciones en tiempo real con backend en Firebase y frontend en React.', hint: 'aplicaciones en tiempo real' } } } } } }
```

## ✅ <a id="file47" href="#file47">src/store/__tests__/index.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/store/__tests__/index.spec.ts)]

6 passed, 0 failed, 0 skipped, 0 todo, done in 9.962125000000015 s

```
✅ index store
   ✅ should have activeHash reducer in the store
   ✅ should handle setActiveHash
   ✅ should maintain the state after an invalid action type
   ✅ should have darkTheme reducer in the store
   ✅ should handle setDarkTheme
   ✅ should maintain the darkTheme state after an invalid action type
```

## ✅ <a id="file48" href="#file48">src/store/hash/__tests__/activeHash.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/store/hash/__tests__/activeHash.spec.ts)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 2.853332999999907 s

```
✅ activeHashSlice
   ✅ should return the initial state
   ✅ should handle setActiveHash
   ✅ should select activeHash from the state
```

## ✅ <a id="file49" href="#file49">src/store/theme/__tests__/themeStatus.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/store/theme/__tests__/themeStatus.spec.ts)]

3 passed, 0 failed, 0 skipped, 0 todo, done in 7.11079200000006 s

```
✅ themeStatus slice
   ✅ should handle initial state
   ✅ should set dark theme
   ✅ should set light theme
```

## ✅ <a id="file50" href="#file50">src/utils/__tests__/centerModalInViewPort.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/utils/__tests__/centerModalInViewPort.spec.ts)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 3.232499999999959 s

```
✅ centerModalInViewport
   ✅ calculates correct position for desktop
   ✅ calculates correct position for mobile
```

## ✅ <a id="file51" href="#file51">src/utils/__tests__/classMerge.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/utils/__tests__/classMerge.spec.ts)]

4 passed, 0 failed, 0 skipped, 0 todo, done in 4.3969999999999345 s

```
✅ cn function
   ✅ should combine classes correctly
   ✅ should handle falsy values
   ✅ should merge Tailwind classes correctly
   ✅ should handle an empty input
```

## ✅ <a id="file52" href="#file52">src/utils/__tests__/setTheme.spec.ts</a> [[link](https://github.com/georgegigarib/george-resume/blob/557cef01a444656c1a9a715751658415d1966ca4/src/utils/__tests__/setTheme.spec.ts)]

2 passed, 0 failed, 0 skipped, 0 todo, done in 3.4045830000000024 s

```
✅ setTheme
   ✅ should add "dark" class when isDark is true
   ✅ should remove "dark" class when isDark is false
```
