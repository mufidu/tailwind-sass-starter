pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your repository here
                // Use the appropriate SCM tool and repository URL
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build for production
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            // Archive build artifacts
            archiveArtifacts artifacts: 'css/**/*, index.html, sass/**/*'
        }

        failure {
            echo 'Build failed.'
        }
    }
}
