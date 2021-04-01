pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'Notify GitLab'
                updateGitlabCommitStatus name: 'build', state: 'pending'
                echo 'build'
                updateGitlabCommitStatus name: 'build', state: 'success'
            }
        }
        stage('test') {
            steps {
                echo 'Notify GitLab'
                updateGitlabCommitStatus name: 'test', state: 'pending'
                bat 'npm run test'
                updateGitlabCommitStatus name: 'test', state: 'success'
            }
        }
    }
}