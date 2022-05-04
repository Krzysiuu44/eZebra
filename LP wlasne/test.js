function isDateBeforeToday(date) {
    dzisiaj = new Date();
    godzine_temu = new Date(date);
    return godzine_temu>dzisiaj;
}
if (isDateBeforeToday(new Date(2021, 12, 1)))
{
    console.log("tak")
}
else {
    console.log("nie")
}