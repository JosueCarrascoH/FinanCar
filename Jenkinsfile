pipeline {
  agent any

  tools {
    nodejs "node"
  }

  parameters {
    string(name: 'container_name', defaultValue: 'pagina_web', description: 'Nombre del contenedor de docker.')
    string(name: 'image_name', defaultValue: 'pagina_img', description: 'Nombre de la imagene docker.')
    string(name: 'tag_image', defaultValue: 'lts', description: 'Tag de la imagen de la página.')
    string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
  }

  stages {
    stage('install') {
      steps {
        git branch: 'main', url: 'https://github.com/JosueCarrascoH/FinanCar.git'
        bat 'npm install'
      }
    }

    stage('test') {
      steps {
        bat 'npm run test --configuration=headless'
      }
    }

    stage('build') {
       steps {
          script {
              bat 'npm run build'
          }
       }
    }
    stage('deploy') {
       steps {
          script {
              bat 'ng serve'
          }
       }
    }
  }
}

