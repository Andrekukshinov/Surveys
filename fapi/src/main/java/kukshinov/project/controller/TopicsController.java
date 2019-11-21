package kukshinov.project.controller;

import kukshinov.project.mockObjects.Mocks;
import kukshinov.project.model.Questions;
import kukshinov.project.model.TopicsForUsers;
import kukshinov.project.service.TopicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicsController {
    @Autowired
    private TopicsService topicsService;

    @RequestMapping(method = RequestMethod.POST)
    public TopicsForUsers createTopic(@RequestBody TopicsForUsers topic) {
        topicsService.addTopic(topic);
        return topic;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteTopic(@PathVariable String id) {
        topicsService.deleteTopic(Long.valueOf(id));
    }

    @GetMapping
    public List<TopicsForUsers> getTopics() {
        return topicsService.getAllTopics();
    }

    @RequestMapping(value = "/{name}",method = RequestMethod.PUT)
    public TopicsForUsers updateTopic(@PathVariable String name, @RequestBody TopicsForUsers topic){
        int index = 0;
        for (int runner = 0; runner < topicsService.getAllTopics().size(); ++runner) {
            if (topic.getName().equals(topicsService.getAllTopics().get(runner).getName())){
                topicsService.updateTopic(topic);
                index = runner;
                name = topicsService.getAllTopics().get(runner).getName();
                break;
            }
        }
        return topicsService.getAllTopics().get(index);
    }


}
