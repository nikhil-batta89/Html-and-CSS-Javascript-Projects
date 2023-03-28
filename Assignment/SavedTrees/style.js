var imgs=[
    'https://th.bing.com/th/id/OIP.piwUuhGW5oEIqM5kgpDwGQHaE4?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://wallpapercave.com/wp/0pMys4b.jpg',
    'https://th.bing.com/th/id/OIP.Us_NzcrGSTXpKIJ11TS2eAHaEK?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.p_VR8oYaHRWHlkeCcMau5AHaFB?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/R.e55961c9a71157eed7ff20b9e14f9cb8?rik=79DzW5Sqy5cw2Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-QhV6nXRuqec%2fT_zi5bpc5rI%2fAAAAAAAAFQw%2f_MLvuftc0bM%2fs1600%2fTrees%2bWallpapers%2b3.jpg&ehk=q21KPbcljCzV0VJTmd%2bP8XgeniCvIfGX4mV1wNpzPY4%3d&risl=&pid=ImgRaw&r=0'
]
var rsns = [
    'Trees provide us Oxygen to survive',
    'Trees give us food and shelter',
    'Trees are habitat for many animal species',
    'Forests help in prevention of soil erosion',
    'Trees are the cause of precipitation'
]
var i=0;
function next(){
    if(i>=rsns.length){
    i=0;
    }
    document.getElementById('reasons').innerHTML=rsns[i];
    document.getElementById('img1').src=imgs[i];
    i++;

}