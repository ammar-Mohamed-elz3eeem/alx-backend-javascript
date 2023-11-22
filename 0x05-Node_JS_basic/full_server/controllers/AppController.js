class AppController {
  static getHomepage(request, response) {
    return response.status(200).header('Content-Type', 'text/plain').send('Hello Holberton School!')
  }
}

export default AppController;