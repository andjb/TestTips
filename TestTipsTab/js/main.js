// List of tips
var tipsList = [

	"Always prefix your emails with the client name/shortcode",
	
	"Remember google pagespeed tests for pre-live QA",
	
	" Identification of requirements and quality criteria </br> </br><span class='tip-block'>Prior to the start of development, the requirements and quality criteria of the software to be developed must be defined. The reason for this is that developers as well as stakeholders need to know what is to be developed; in addition, this approach enables unification of the various ideas regarding requirements and quality. According to ISO 9126, quality characteristics of software are divided into six criteria: functionality, reliability, usability, efficiency, maintainability and portability. All these requirements and quality criteria must be checked by the tester. The results should be communicated at an early stage through good documentation. Hence, occurring errors can be corrected in time.</span>",
	
	"Quality assurance is not a phase</br></br>Quality assurance is not the last link in the development process. It is one step in the ongoing process of agile software development. Testing takes place in each iteration before the development components are implemented. Accordingly, software testing needs to be integrated as a regular and ongoing element in the everyday development process.",
	
	"Test Automation</br></br>Automated software testing is standard nowadays. Approximately 80 percent of all tests should be automated. Automated tests are especially useful for regular testing with many repetitions or tests that are difficult to execute manually, such as load tests.</br></br>Automated tests are divided into:</br></br>Unit Tests</br>Component Tests</br>Integration Tests</br>Acceptance tests</br>Graphical User Interface (GUI) tests</br></br>However, not everything can be tested by automated tests. For example, it is not possible to test software concerning its usability (e.g. accessibility) with automated tests. Therefore, manual testing should always be an integral part of quality assurance.",
	
	"Communication with team and stakeholders</br></br>Communication is a very important part of quality management. Errors in the software can only be addressed, reconstructed and corrected by good documentation. In addition to good communication in the team, good communication with the customer is important too. For example, in case of new specifications: If these are not communicated in time, it can lead to major delays and additional expenses in the project. Feedback should be a regular part of quality assurance, so that both the development team and the customer always know the current status of the project.",
	
	"Use good testing tools</br></br><span class='tip-block'>Testing tools are a fundamental part of software testing, particularly in automated tests. In addition to well-structured work methods and processes, using good testing tools is necessary to make the work of a tester efficient.</br></br><a href src='https://www.aoe.com/fileadmin/AOE.com/documents/de/blog/aoe/Top-10_Software-Testing-Tools.pdf'>List</a></span> ",
	
	
	"When testing the application, it's always better to clear the cookies/cache of the browser unless it needs to be there while testing",
	
	"When you are testing the front-end or UI of the application, keep the developer tools window open (generally done by pressing the F12 key) and while the page is loading, see if there are any warnings or errors there. Sometimes I would observe that even though the UI is working fine, there were some warnings on the console",
	
	"Always provide some extra information when logging an issue because it may help the developer fix the bug faster. Also while testing the fix, it would allow you better access to which scenarios to regress",
	
	"Tally your application logs at the web/app server. There could be some instances when your application will work as expected, but you will still see a warning or error message, which could potentially be a bug",
	
	"Support multiple Internet Explorer versions. If you are expected to test your application functionality on different versions of IE, don’t use the “Compatibility Mode” of the browser because you might miss some issues. Instead, use the actual browser for testing",
	
	"When you are testing the UI, try using keyboard shortcuts. These might uncover some issues that would otherwise be hidden",

"When you’re testing a fix for an issue, try to get the change-list number that the developer checked-in for the fix. Use that to look into the code change by that number and assess what changes have been done. You might find this useful to help you decide what test you need to run to get the bug properly regressed. You can also ask the developer to give you a pseudo-code, if possible",


"When you’re writing the bug description, put the test cases number that you would rerun while regressing the issue. This will give the developer a better understanding of the scenarios they need to test when fixing the issue, and decrease the possibility of having to reopen the issue",


"It’s good practice to sit with the developer and discuss the fix in terms of different use cases the code needs to support. This allows the developer to unit test the code while keeping the different use cases, which would result in fewer reopened issues",


"Sometimes the developer fixes the bug without thinking about the entire context of functionality, so it’s always better to discuss your ideas with the developer to ensure full clarity"
	
	
];

// Tip Limit counter
var tipLimit = 3;

// Generate a number
function generateNumber(){
	return Math.floor(Math.random() * tipsList.length);
};

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip(){
	var tip =  tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick(){
	var tipButton = document.querySelector('.tip-button');
	tipButton.addEventListener('click', function(){
		console.log('RIP clippy!');
		tipLimit = tipLimit-1;
		if(tipLimit >= 0){
			generateTip();
			if(tipLimit ===0){
				tipButton.innerHTML = ('Better reload the page or open a new tab!');
				tipButton.classList.add('disabled');
			}
		}
	});
}
onTipButtonClick();


// Get the first tip
generateTip();

