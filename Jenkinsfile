pipeline {
    agent none
    stages {
        stage('Build'){
            agent{
                label 'docker'
            }
            steps{
                script {
                    docker.withRegistry('http://docker-registry:5000', 'nexus-credentials') {
                        image = docker.image('python:latest')
                        image.pull()
                    }
                    def image = docker.build("docker-registry:5000/pcn-portal-testing:${env.BRANCH_NAME}-${env.BUILD_NUMBER}")
                    docker.withRegistry('http://docker-registry:5000', 'nexus-credentials') {
                        image.push "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
                        image.push "${env.BRANCH_NAME}-latest"
                    }
                }
            }
        }
        stage('Run'){
            agent{
                label 'docker'
            }
            steps{
                sh "docker run -e PCN_URL=${pcn_url} -e BROWSER=${pcn_browser} -e TAG_NAME=${pcn_tag} -dit -v /tmp/report/report/build-${env.BUILD_NUMBER}:/usr/src/pcn-portal-testing/Results docker-registry:5000/pcn-portal-testing:${env.BRANCH_NAME}-latest"
            }
        }
    }
}