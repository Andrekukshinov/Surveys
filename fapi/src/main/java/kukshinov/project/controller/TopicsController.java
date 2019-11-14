package kukshinov.project.controller;

import kukshinov.project.model.Questions;
import kukshinov.project.model.TopicsForUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicsController {

    //    @Autowired
//    private TopicsForUsers topicsForUsersService;
    @GetMapping
//    public List<TopicsForUsers> getTests() {
    public List<TopicsForUsers> getTests() {
        List<TopicsForUsers> myList = new ArrayList<>();
//        List<Questions> question1 = new ArrayList<>();
//        List<String> answersForQuestion1 = new ArrayList<>();
//        answersForQuestion1.add("1");
//        answersForQuestion1.add("2");
//        question1.add(new Questions(1, "How much...", answersForQuestion1));
//        TopicsForUsers topic1 = new TopicsForUsers("cars", 1, question1, true);
//        myList.add(topic1);
//        TopicsForUsers myTest = new TopicsForUsers("cars",
//                1, new ArrayList<Questions>().
//                add);
//        {
//                new Questions(1, "How much...", new String[]{"1", "2"}),
//                new Questions(2, "How many ...", new String[]{"3", "4"}),
//                new Questions(3, "Where ...", new String[]{"5", "6"}),
//                new Questions(4, "When ...", new String[]{"7", "8"})},
//                true);
        TopicsForUsers myTest = new TopicsForUsers("cars",
                1, new Questions[]{
                new Questions(1, "How much...", new String[]{"1", "2"}),
                new Questions(2, "How many ...", new String[]{"3", "4"}),
                new Questions(3, "Where ...", new String[]{"5", "6"}),
                new Questions(4, "When ...", new String[]{"7", "8"})},
                true);
        TopicsForUsers myTest1 = new TopicsForUsers("animals",
                2, new Questions[]{
                new Questions(5, "How much time ...", new String[]{"9", "10", "5678"}),
                new Questions(6, "How many days...", new String[]{"11", "12"}),
                new Questions(7, "Where have...", new String[]{"13", "14"}),
                new Questions(8, "When did you last...", new String[]{"15", "16"})},
                true);
        TopicsForUsers myTest2 = new TopicsForUsers("space",
                2, new Questions[]{
                new Questions(9, "How much time are gonna...", new String[]{"17", "18"}),
                new Questions(10, "How many days will you...", new String[]{"19", "20"}),
                new Questions(11, "Where have you left them...", new String[]{"21", "22"}),
                new Questions(12, "When did you last see her...", new String[]{"23", "24"})},
                true);
        myList.add(myTest);
        myList.add(myTest1);
        myList.add(myTest2);
        return myList;
//        return "ytyt";
    }
}
