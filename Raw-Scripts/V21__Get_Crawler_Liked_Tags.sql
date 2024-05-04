drop function if exists getUserLikedTags(int);
drop function if exists getCrawlerLikedTags(int);

create or replace 
	function getCrawlerLikedTags(paramGoogleUserID int)
returns table (tagname)
as $$
begin
	return query select
		t.tagName
	from
		SpinLikes as pl
		inner join Spin as p on p.spinID = pl.spinID
		inner join Crawler as u on pl.crawlerID = u.crawlerID
		inner join SpinTags as pt on p.spinID = pt.spinID
		inner join Tag as t on t.tagID = pt.tagID
	where
		p.spinIsDeleted = false and
		pl.crawlerID = paramGoogleUserID
	group by
		t.tagName;
end;
$$
language plpgsql;