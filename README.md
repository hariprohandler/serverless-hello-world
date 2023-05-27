# Serverless "Hello, World!" Application

This repository contains a serverless application that demonstrates a "Hello, World!" API with multiple routes. It includes instructions for running the application locally using serverless-offline and deploying it using Jenkins.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- Jenkins (for deployment)

## Setup and Local Development

1. Clone this repository or copy the project files to your local machine.

2. Open a command prompt or terminal and navigate to the project directory.

3. Install the project dependencies by running the following command:
npm install


4. Start the local development server by running the following command:
npm start


The serverless-offline server will start and simulate the serverless environment locally.

5. Once the server starts, you should see output indicating that the serverless-offline server is running and listening on `localhost` at port `3000`.

6. Open a web browser or a tool like Postman and access the routes defined in the `index.js` file. For example:
- For the "Hello, World!" route, visit http://localhost:3000/hello
- For the "Goodbye, World!" route, visit http://localhost:3000/goodbye

You should see the respective responses displayed in your web browser.

## Deployment using Jenkins

1. Set up Jenkins on your machine if you haven't already. Refer to the Jenkins documentation for installation and configuration instructions.

2. Create a new Jenkins job to build and deploy the serverless application.

3. Configure the Jenkins job to fetch the code from your version control repository.

4. Add the following stages to your Jenkins pipeline in the `jenkins.yml` file:

- **Install**: Install project dependencies by running `npm install`.
- **Build**: Build the serverless application by running `sls package`.
- **Deploy**: Deploy the application using `sls deploy`.

5. Commit and push the changes to your version control repository.

6. Trigger the Jenkins job to build and deploy the serverless application.

7. Once the deployment is complete, you can access the deployed application using the provided URL.

Note: The deployment URL will depend on the serverless platform you are using. Consult the documentation of your chosen platform for more details.

## Conclusion

You have now set up and run a serverless "Hello, World!" application locally using serverless-offline. You have also learned how to deploy the application using Jenkins. Feel free to explore and modify the code as needed for your own projects.

For more information, please refer to the individual question and answer sections above.

## Run project
1. npm install serverless -g
2. Add line to serverless.yml 
plugins:
  - serverless-offline

3. Run serverless offline  

