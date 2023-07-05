**MVP**

    The app should display the items on the to-do list and list their status.

**MoSCoW**

    Must have:
        Dynamically render the content with React using components
        Display all to-do list items
        Three "views" for the user: All, Completed, & To-Do (not completed)
        Cross out or check off one item as "completed"
        See a count of remaining items
        Remove one item (either hard delete or soft delete/archive)
        Check off or cross out all items in one click as a "completed all" function
        Ability to press a button and all checked off items become active again

     Should have:
        Remove all completed items (soft delete/archive)
        Use LocalStorage to persist data on a revisit or reloading of the page. With this implementation add a useEffect hook to access localStorage.

    Could have:
        Create a flow diagram for the front end architecture to be used in an MVP
        Edit To-Do's inline with a doubleclick Add a separate “Reminders” set of functionality
        Add due dates and alarms to the to-dos that handle pop ups in your browser in an elegant fashion
        Automatically mark to-dos with a new status based on done/not done and the time it was due.

    Won't have:

**Atomic design**

    Organisms: 
        input field
        to do list item(s)
        clear completed button

    Molecules: 
        todo heading
        no. of items left on the todo list

    Atoms: 
        text

**KANBAN**

    Stories:

        As a user I want to enter an item, so I remember to complete this item
        As a user I want to have the ability to mark an item as completed, so that the item is removed from my list
        As a user I want to view completed items in a separate list, so that they can be viewed at a later time
        As a user I want to view all items, so that I can see what has been completed and needs work
        As a user I want to view active items in a list, so that I can see what is still outstanding
        As a user I want a way to clear all completed items, so that all unnecessary items can be removed from view
        As a user I want a view of how many opens items are left, so that I always have a clear view of how many items are left



**Procedural**

    BEGIN 
    INIT - set variables, define functions, define components, define initial (persistent from localStorage or not) state, display UI
    INPUT - user inputs to-do item
    OUTPUT/RENDER - user input is output/rendered to the list
    END

**Functional**

    Variables:

        item

        activeItem

        completedItem

    Functions:   
    
        function uniqueId () {

            const secondsSinceEpoch = Math.round(Date.now() / 1000)

            toDoItem.id.value = secondsSinceEpoch; //add unique ID to toDoItem object.
            
            }

**OOP**

    To do item {
        label - text
        status - boolean or arrray ?
        id: result of uniqueId();
    }

**REACT**

    State
        items left - ?? store or compute
        to do - list or array of items
        view or view - to track what page or view we are in
        pages or routes - all, active, completed etc... 


    Components

        ToDoList
            render the todo items
            based on a filtered set of items in state
                DON'T DO THESE (to CONCRETE) ToDoListAll - ToDoListCompleted, ToDoListImportantUrgent

    ToDoItem

        Responsible for displaying item

    Responsible for creating/updating?

    FooterMenu or Menu

        Responsible for filtering

        Responsible for switching the views

    user input (data and functionality)