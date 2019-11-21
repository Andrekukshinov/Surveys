package kukshinov.project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TopicsForUsers {
    private String name;
    private long topicId;
//    private Questions[] questions;
    private List<Questions> questions;
    private boolean isPublic;

    public TopicsForUsers(String name, long topicId, /*List<Questions> questions*/Questions[] questions, boolean isPublic) {
        this.name = name;
        this.topicId = topicId;
        this.questions = Arrays.asList(questions);
        this.isPublic = isPublic;
    }

    public long getTopicId() {
        return topicId;
    }

    public void setTopicId(long topicId) {
        this.topicId = topicId;
    }

    public List<Questions> getQuestions() {
        return questions;
    }

    public void setQuestions(Questions[] questions) {
        this.questions = Arrays.asList(questions);
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean aPublic) {
        isPublic = aPublic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Topic{" +
                "id=" + topicId +
                ", Title='" + name + '\n' +
                '}';
    }
}
