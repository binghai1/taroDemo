const rootPath="https://cnodejs.org/api/v1"
const apiObject={
    getTopics:rootPath+'/topics',
    getTopicInfo:rootPath+'/topic/',
    checkUserToken:rootPath+'/accesstoken',
    getUserInfo:rootPath+'/user/',
    createTopic:rootPath+'/topics',
    replayTopic:rootPath+'/topic/',
    like:rootPath+'/reply/'

}
export default apiObject