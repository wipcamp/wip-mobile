const initState = {
    filter : "ALL", 
    problem : [], // for all problem in database
    newProblem : {
        topic: null,
        problemTypeId: null,
        description: null,
        isSolve: false,
        reportId: null,
        created_at: null,
        updated_at: null
    } // for report problem any input
}

export default initState