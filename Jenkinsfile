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
                echo Starting NPM install
        	where npm
        	npm ci
        	echo NPM install done
            }
        }

        stage('Unit Test') {
            steps {
                bat 'npm run unit-test'
            }
        }

        stage('Integration Test') {
            steps {
                bat 'npm run integration-test'
            }
        }

        stage('Delivery') {
            steps {
                echo "Building the project..."
            }
        }
    }
}
