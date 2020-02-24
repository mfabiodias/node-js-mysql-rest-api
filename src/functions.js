const urlSlug = str => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç";
    var to   = "aaaaaeeeeeiiiiooooouuuunc";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
};

const requireAllFiles = (dir_files, exclude_files = []) => {
    require("fs").readdirSync(dir_files).forEach(function(file) {

        if(!exclude_files.includes(file))
        {
            require(`${dir_files}/${file}`);
        }
    });
}

const mysqlDateTime = () => {
    return new Date().toJSON().slice(0, 19).replace('T',' ')
}


module.exports = {
    urlSlug,
    requireAllFiles, 
    mysqlDateTime
}