export class API{
  constructor() {
    this.baseUrl = 'https://api.imgflip.com';
  }

  async fetchMemes() {
   try {
    const promise = await fetch(`${this.baseUrl}/get_memes`);
    if (!promise.ok) {
      throw new Error('Error')
    }
    const response = await promise.json();
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
