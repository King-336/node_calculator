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
                sh 'npm install'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'npm run unit-test'
            }
        }
        stage('Integration Test') {
            steps {
                sh 'npm run integration-test'
            }
        }
        stage('Delivery') {
            steps {
                echo "Building the project..."
            }
        }
    }
}