drop trigger if exists tag_lowercase_trigger on Tag;
drop function if exists lowercaseTrigger();

CREATE OR REPLACE FUNCTION lowercaseTrigger()
RETURNS TRIGGER AS $$
BEGIN
    NEW.tagName = LOWER(NEW.tagName);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tag_lowercase_trigger
BEFORE INSERT ON Tag
FOR EACH ROW
EXECUTE FUNCTION lowercaseTrigger();
