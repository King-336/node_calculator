pipeline {
    agent any
    triggers {
        pollSCM('* * * * *') // Polls the SCM every minute
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
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