Feature: Check service is up and running

  Background:
    Given I have app up and running

  Scenario Outline: Display correctly service is running
    When I get "<serviceUrl>"
    Then I can expect code "<code>"
    And I can expect message "<message>"

    Examples:
      | serviceUrl                         | code    | message                   |
      | http://localhost:3001/todos/health | SUCCESS | Service is up and running |
