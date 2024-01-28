import project01 from "./../img/projects/01.jpg";
import project02 from "./../img/projects/02.jpg";
import project03 from "./../img/projects/03.jpg";

const projects = [
	{
		title: "Bank Application",
		technology: 'Java · Spring Boot · Spring Security · Hibernate · Junit ·  MySQL · Liquibase · SLF4J',
		img: project01,
		gitHubLink: 'https://github.com/AllaVict/java_developer_portfolio',
		description: "•	The Bank Application is microservice which exposed a RESTful API to perform various banking transactions, manage client`s accounts."
	},
		{
		title: 'My Porfolio Site',
		img: project02,
		technology: ' React.js · HTML · CSS · JavaScript · Visual Studio Code · GitHub '  ,
		gitHubLink: 'https://github.com/AllaVict/quick_click_market_place',
		description: "•	The project presents information about my portfolio, my Java Developer experience."

	},
	{
		title: "Quick Click Market Place (In-Progress)",
		img: project03,
		technology: 'Java · Spring · Hebirnate · PostgresSQL · JUnit · Gradle · Swagger · Flyway · Docker · Other',
		gitHubLink: 'https://github.com/AllaVict/bank_application_project_v1',
		description: "•	The project is an online classifieds platform that brings people together to buy, sell or exchange goods and services."

	},

];

export { projects }