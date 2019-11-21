package kukshinov.project.mockObjects;

import kukshinov.project.model.Questions;
import kukshinov.project.model.Survey;
import kukshinov.project.model.TopicsForUsers;
import kukshinov.project.service.TopicsService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Mocks {
    private static int questionIdCounter = 0;
    public List<TopicsForUsers> topics = new ArrayList<>();
    public List<Survey> surveys = new ArrayList<>();
    // In the following block of code List of Topics For users is described
    {
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
                3, new Questions[]{
                new Questions(9, "How much time are gonna...", new String[]{"17", "18"}),
                new Questions(10, "How many days will you...", new String[]{"19", "20"}),
                new Questions(11, "Where have you left them...", new String[]{"21", "22"}),
                new Questions(12, "When did you last see her...", new String[]{"23", "24"})},
                true);
        topics.add(myTest);
        topics.add(myTest1);
        topics.add(myTest2);
    }
    // In the following block of code List of surveys is described
    {
        List<Questions> questionsForSomeTopic1 = new ArrayList<>();
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "What kind of?", new String[]{"this", "that", "those" , "that"})
        );
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "When is it gonna take place?", new String[]{"Sept", "Nov"})
        );
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "How much time?", new String[]{"43", "13", "16"})
        );
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "Where do you study", new String[]{""})
        );
        Survey someTopicSurvey1 = new Survey(
                1, questionsForSomeTopic1, "admin", new Date().getTime(),
                (new Date().getTime() + 1209600000L), "Getting aquainted",
                "This survey may require some personal info!"
        );
        List<Questions> questionsForSomeTopic2 = new ArrayList<>();
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "What kind of game?", new String[]{"that", "these", "them" , "there"})
        );
        questionsForSomeTopic1.add(
                new Questions(questionIdCounter++, "When will you leave for?", new String[]{"Next year", "In 2 years"})
        );
        Survey someTopicSurvey2 = new Survey(
                2, questionsForSomeTopic1, "admin", (new Date().getTime() - 120960000L),
                ((new Date().getTime() + 1209600000L) - 120960000L ), "Second survey",
                "Some of your interests might be used here"
        );
        surveys.add(someTopicSurvey1);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey1);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey1);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey1);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey1);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey2);
        surveys.add(someTopicSurvey2);
    }
}
