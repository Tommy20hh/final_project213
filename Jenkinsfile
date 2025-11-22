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
        sh 'docker compose down -v || true'
        sh 'docker compose build --no-cache'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker compose up -d'
      }
    }

    stage('Verify') {
      steps {
        sh 'docker compose ps'
        sh 'curl -f http://localhost:3000 || exit 1'
        sh 'curl -f http://localhost:3001/health || exit 1'
      }
    }
  }

  post {
    success {
      echo "Deployment successful!"
    }
    failure {
      sh 'docker compose logs --tail=100 || true'
    }
  }
}
