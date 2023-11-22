#!/usr/bin/env node
/**
 * Create a class named AppController. Add a static method named getHomepage
 * The method accepts request and response as argument.
 * It returns a 200 status and the message Hello Holberton School!
 */

class AppController {
  /**
     * App controller class
     *@methods:
     *@getHomepage - returns the message Hello Holberton School!
     *
     */
  static getHomepage(req, res) {
    return res.send('Hello Holberton School!');
  }
}

export default AppController;
