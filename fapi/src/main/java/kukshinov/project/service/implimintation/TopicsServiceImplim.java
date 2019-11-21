package kukshinov.project.service.implimintation;

import kukshinov.project.mockObjects.Mocks;
import kukshinov.project.model.TopicsForUsers;
import kukshinov.project.service.TopicsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicsServiceImplim implements TopicsService {
    // todo delete mocks after BE creation
    private Mocks mocks = new Mocks();
    // ends here
    @Override
    public List<TopicsForUsers> getAllTopics() {
        return mocks.topics;
    }

    @Override
    public TopicsForUsers addTopic(TopicsForUsers topic) {
        mocks.topics.add(topic);
        return topic;
    }

    @Override
    public TopicsForUsers getTopic(long id) {
        return null;
    }

    @Override
    public void deleteTopic(long id) {
        for (int runner = 0; runner < mocks.topics.size(); ++runner) {
            if (mocks.topics.get(runner).getTopicId() == id) {
                mocks.topics.remove(runner);
                break;
            }
        }
    }

    @Override
    public TopicsForUsers updateTopic(TopicsForUsers topic) {
        for (int runner = 0; runner < mocks.topics.size(); ++runner){
            if (topic.getTopicId() == mocks.topics.get(runner).getTopicId()){
                mocks.topics.set(runner, topic);
                break;
            }
        }
        return topic;
    }
}
