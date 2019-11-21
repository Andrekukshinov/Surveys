package kukshinov.project.service;

import kukshinov.project.model.TopicsForUsers;

import java.util.ArrayList;
import java.util.List;

public interface TopicsService {
    List<TopicsForUsers> getAllTopics();
    TopicsForUsers addTopic(TopicsForUsers topic);
    TopicsForUsers getTopic(long id);
    void deleteTopic(long id);
    TopicsForUsers updateTopic(TopicsForUsers topic);
}
