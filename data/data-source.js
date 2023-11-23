import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async homeRecipe() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.recipes;
  }

  static async detailRecipe(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.recipes;
  }
}

export default DataSource;
