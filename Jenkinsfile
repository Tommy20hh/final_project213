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

    stage('Health Check') {
      steps {
        echo "Waiting for API to be ready..."

        script {
          def retries = 12   // 12 × 5 sec = 60 sec max wait
          def ready = false

          for (int i = 1; i <= retries; i++) {
            try {
              sh "curl -f http://localhost:3001/movies"
              echo "API is ready ✔"
              ready = true
              break
            } catch (err) {
              echo "API not ready (${i}/${retries})... waiting 5s"
              sleep 5
            }
          }

          if (!ready) {
            error("API failed health check ❌")
          }
        }
      }
    }
  }

  post {
    success {
      echo "🎉 Deployment successful!"
      echo "Frontend:  http://localhost:3000"
      echo "API:       http://localhost:3001/movies"
    }
    failure {
      sh 'docker compose logs --tail=100 || true'
    }
  }
}
