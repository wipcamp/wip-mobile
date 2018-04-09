export const newProblem = {
    topic: "Test new problem",
    problem_type_id: 1,
    description: "Test new problem",
    report_id: 1
}

export const problem = [
    {
        id: 1,
        topic: "Test Problem 1",
        description: "Test Description 1",
        problem_type_id: 1,
        report_id: 1,
        priority_id: 1,
        is_solve: false,
        not_solve: false,
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 2,
        topic: "Test Problem 2",
        description: "Test Description 2",
        problem_type_id: 2,
        report_id: 2,
        priority_id: 2,
        is_solve: false,
        not_solve: false,
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 3,
        topic: "Test Problem 3",
        description: "Test Description 3",
        problem_type_id: 3,
        report_id: 3,
        priority_id: 3,
        is_solve: false,
        not_solve: false,
        created_at: "2018-02-02 17:50:03",
        updated_at: "2018-02-02 17:50:03"
    }
]

export const categoryProblem = [
    {
        value: 1,
        label: "Test 1"
    },
    {
        value: 2,
        label: "Test 2"
    }
]

export const timetable = [
    {
        id: 1,
        topic: "Test timetable 1",
        description: "Test Description 1",
        locaion: "1",
        start_on: "2018-01-01 17:00:00",
        finish_on: "2018-01-01 17:50:00",
        created_id: 1,
        role_team_id: 1,
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 2,
        topic: "Test timetable 2",
        description: "Test Description 2",
        locaion: "2",
        start_on: "2018-01-02 17:00:00",
        finish_on: "2018-01-02 17:50:00",
        created_id: 2,
        role_team_id: 2,
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    }
]

export const priority = [
    {
        value: 1,
        label: "hight"
    },
    {
        value: 2,
        label: "medium"
    }
]

export const notification = [
    {
        id: 1,
        user_id: 1,
        title: "Test noti 1",
        body: "Test body 1",
        data: "{'table':'problems','id':1}",
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 2,
        user_id: 2,
        title: "Test noti 2",
        body: "Test body 2",
        data: "{'table':'announces','id':1}",
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 3,
        user_id: 3,
        title: "Test noti 3",
        body: "Test body 3",
        data: "{'table':'assigns','id':1}",
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    },
    {
        id: 4,
        user_id: 4,
        title: "Test noti 4",
        body: "Test body 4",
        data: "{'table':'timetables','id':1}",
        created_at: "2018-02-02 17:50:01",
        updated_at: "2018-02-02 17:50:01"
    }
]