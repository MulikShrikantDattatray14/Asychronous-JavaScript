// Task 1: Simulate fetching data from a database
function fetchData(callback) {
    console.log("Fetching data from Task 1...");
    setTimeout(() => {
        const data = { userId: 1, name: "John Doe" };  // Simulated data
        console.log("Data fetched from Task 1:", data);
        callback(null, data);  // First argument is an error (null here), second is the data
    }, 1000);  // Simulate a 1-second delay
}

// Task 2: Simulate fetching more data
function fetchMoreData(callback) {
    console.log("Fetching data from Task 2...");
    setTimeout(() => {
        const moreData = { country: "USA", age: 30 };  // Simulated data
        console.log("Data fetched from Task 2:", moreData);
        callback(null, moreData);  // Passing data to callback
    }, 500);  // Simulate a 0.5-second delay
}

// Task 3: Simulate processing data
function processData(callback) {
    console.log("Processing data in Task 3...");
    setTimeout(() => {
        const processedData = { status: "processed", timestamp: Date.now() };  // Simulated processed data
        console.log("Data processed in Task 3:", processedData);
        callback(null, processedData);  // Returning processed data
    }, 1500);  // Simulate a 1.5-second delay
}

// Function to run tasks in parallel
function runTasksInParallel(callback) {
    let completedTasks = 0;
    const results = [];
    const totalTasks = 3;  // Total number of parallel tasks

    // Inner function to handle task completion
    function onTaskComplete(error, result) {
        if (error) {
            console.log("Error:", error);
            return callback(error);  // If any task fails, terminate early
        }

        results.push(result);  // Collect the results from each task
        completedTasks++;  // Increment the completed task counter

        if (completedTasks === totalTasks) {
            // All tasks are done
            console.log("All tasks completed:", results);
            callback(null, results);  // Final callback with results from all tasks
        }
    }

    // Start all tasks in parallel
    fetchData(onTaskComplete);        // Task 1
    fetchMoreData(onTaskComplete);    // Task 2
    processData(onTaskComplete);      // Task 3
}

// Start the parallel tasks and provide a final callback
runTasksInParallel(function(error, results) {
    if (error) {
        console.log("An error occurred during one of the tasks.");
    } else {
        console.log("Final results from all tasks:", results);
    }
});