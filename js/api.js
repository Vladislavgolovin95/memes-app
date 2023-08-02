export class API{
  constructor() {
    this.baseUrl = 'https://api.imgflip.com';
  }

  async fetchMemes() {
   try {
    const getMemesResponse = await fetch(`${this.baseUrl}/get_memes`);
    if (!getMemesResponse.ok) {
      throw new Error('Error')
    }
    const response = await getMemesResponse.json();
    if (response.success === true) {
      return response;
    } else {
      console.log('Error response')
    }
   }
   catch(error) {
    console.log(error);
   }
  }
}
