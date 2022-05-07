const saveWindowStateBeforeUnload = () => {

  window.onbeforeunload = function (evt) {

    const lastWindowState = {
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      screenX: window.screenX,
      screenY: window.screenY,
    }

    localStorage.setItem('lastWindowState', JSON.stringify(lastWindowState));

    return null;
  };
};

const restoreWindowState = (defaultOuterWidth, defaultOuterHeight, defaultScreenX, defaultScreenY) => {

  // resize and reposition window
  let lastWindowState = JSON.parse(localStorage.getItem('lastWindowState'))

  if (lastWindowState === null) {
    if (defaultOuterWidth || defaultOuterHeight || defaultScreenX || defaultScreenY) {
      lastWindowState = {}
    } else {
      return;
    }
  }

  const outerHeight = lastWindowState.outerHeight || defaultOuterHeight;
  const outerWidth = lastWindowState.outerWidth || defaultOuterWidth;
  const screenX = lastWindowState.screenX || defaultScreenX;
  const screenY = lastWindowState.screenY || defaultScreenY;

  window.resizeTo(
    outerWidth,
    outerHeight,
  );

  window.moveTo(screenX, screenY);

};

const getSavedWindowState = (defaultInnerWidth, defaultInnerHeight, defaultScreenX, defaultScreenY) => {

  const lastWindowState = JSON.parse(localStorage.getItem('lastWindowState'));

  if (!lastWindowState) {
    let windowFeatures = '';
    if (defaultInnerWidth) {
      windowFeatures += `innerWidth=${defaultInnerWidth},`
    }
    if (defaultInnerHeight) {
      windowFeatures += `innerHeight=${defaultInnerHeight},`
    }
    if (defaultScreenX) {
      windowFeatures += `screenX=${defaultScreenX},`
    }
    if (defaultScreenY) {
      windowFeatures += `screenY=${defaultScreenY},`
    }
    return windowFeatures;
  }

  const innerHeight = lastWindowState.innerHeight;
  const innerWidth = lastWindowState.innerWidth;
  const screenX = lastWindowState.screenX;
  const screenY = lastWindowState.screenY;

  return `screenX=${screenX},screenY=${screenY},innerWidth=${innerWidth},innerHeight=${innerHeight},`;

};

export { saveWindowStateBeforeUnload, getSavedWindowState, restoreWindowState };