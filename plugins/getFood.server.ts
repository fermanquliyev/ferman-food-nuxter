export default async (pluginData:any)=>{
  await pluginData.store.dispatch('fetchFoodData');
}
