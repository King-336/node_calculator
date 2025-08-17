pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                powershell 'echo Starting NPM install'
        	powershell 'where npm'
        	powershell 'npm ci'
        	powershell 'echo NPM install done'
            }
        }

        stage('Unit Test') {
            steps {
                powershell 'npm run unit-test'
            }
        }

        stage('Integration Test') {
            steps {
                powershell 'npm run integration-test'
            }
        }

        stage('Delivery') {
            steps {
                powershell 'echo "Building the project..."'
            }
        }
    }
}
