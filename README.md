# save-window-size-position

Save and restore window size and position

## Usage

```bash
npm i 'save-window-size-position'
```

```js
// window.html
import { saveWindowStateBeforeUnload, restoreWindowState } from 'save-window-size-position'

restoreWindowState();
saveWindowStateBeforeUnload();
```

or

```js
// parent.html
import { getSavedWindowState } from 'save-window-size-position';

window.open('./test.html', undefined, `popup=1,${getSavedWindowState()}`);
// won't resize the window on open, but width and height are inaccurate (not only if the user zoomed)
```

```js
// window.html
import { saveWindowStateBeforeUnload } from 'save-window-size-position'

// restoreWindowState(); // resize to make the window size accurate
saveWindowStateBeforeUnload();
```

### Parameters

```js
restoreWindowState(
  defaultOuterWidth, 
  defaultOuterHeight, 
  defaultScreenX, 
  defaultScreenY,
);

getSavedWindowState(
  defaultInnerWidth, 
  defaultInnerHeight, 
  defaultScreenX, 
  defaultScreenY,
);
```

