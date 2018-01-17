const initState = {
    filter : "ALL", 
    problem : [], // for all problem in database
    newProblem : {
        topic: null,
        problemTypeId: null,
        description: null,
        isSolve: false,
        reportId: null
    } // for report problem any input
}

export default initState