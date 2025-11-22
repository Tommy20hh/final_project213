pipeline {
  agent any
  triggers { pollSCM('H/2 * * * *') }
  environment {
    BUILD_TAG = "${env.BUILD_NUMBER}"
    GIT_COMMIT_SHORT = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
  }
  parameters {
    booleanParam(name: 'CLEAN_VOLUMES', defaultValue: true, description: 'Remove volumes (clears DB)')
    string(name: 'API_HOST', defaultValue: 'http://192.168.56.1:3001', description: 'API host for frontend')
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
        echo "Build: ${env.BUILD_TAG} Commit: ${env.GIT_COMMIT_SHORT}"
      }
    }
    stage('Validate') {
      steps {
        sh 'docker compose config'
      }
    }
    stage('Prepare Environment') {
      steps {
        withCredentials([
          string(credentialsId: 'MYSQL_ROOT_PASSWORD', variable: 'MYSQL_ROOT_PASS'),
          string(credentialsId: 'MYSQL_PASSWORD', variable: 'MYSQL_PASS')
        ]) {
          sh """
cat > .env <<EOF
MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASS}
MYSQL_DATABASE=movies_db
MYSQL_USER=movies_user
MYSQL_PASSWORD=${MYSQL_PASS}
MYSQL_PORT=3306
PHPMYADMIN_PORT=8888
API_PORT=3001
DB_PORT=3306
FRONTEND_PORT=3000
NODE_ENV=production
API_HOST=${params.API_HOST}
EOF
"""
          sh 'echo ".env created"'
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          def downCmd = params.CLEAN_VOLUMES ? 'docker compose down -v' : 'docker compose down'
          sh downCmd
          sh 'docker compose build --no-cache'
          sh 'docker compose up -d'
        }
      }
    }
    stage('Health Check') {
      steps {
        sh 'sleep 15'
        sh """
docker compose ps
timeout 60 bash -c 'until curl -f http://localhost:3001/health; do sleep 2; done' || exit 1
curl -f http://localhost:3001/movies || exit 1
"""
      }
    }
    stage('Verify') {
      steps {
        sh """
echo "Container status:"
docker compose ps
echo "Last logs (tail 20):"
docker compose logs --tail=20
"""
      }
    }
  }
  post {
    success {
      echo "✅ Deployment succeeded"
      echo "Frontend: http://localhost:3000"
      echo "API: http://localhost:3001"
      echo "phpMyAdmin: http://localhost:8888"
    }
    failure {
      sh 'docker compose logs --tail=50 || true'
    }
    always {
      sh 'docker image prune -f || true'
    }
  }
}
