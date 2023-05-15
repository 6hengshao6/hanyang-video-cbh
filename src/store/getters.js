const getters = {
  language: (state) => state.app.language,
  menuCode: (state) => state.app.menuCode,
  markerInfo: (state) => state.common.markerInfo,
  streetId: (state) => state.common.streetId,
  selectedNode: (state) => state.common.selectedNode,
  regionTree: (state) => state.common.regionTree,
  regionList: (state) => state.common.regionList,
  userInfo: (state) => state.common.userInfo,
  streetList: (state) => state.common.streetList,
  sceneList: (state) => state.common.sceneList
}
export default getters
