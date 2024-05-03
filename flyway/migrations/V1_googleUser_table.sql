create table Crawler (
	crawlerID serial,
	crawlerEmail varchar(255),
	crawlerUserIsDeleted boolean default false,
	
	constraint crawler_user_pk primary key (crawlerID),
	constraint crawler_user_uq unique (crawlerEmail)
);
