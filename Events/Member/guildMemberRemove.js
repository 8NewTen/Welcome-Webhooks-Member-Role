const { MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member){
        
        const{ user, guild } = member; 
        const Logger = new WebhookClient({
            id: "934757412311806002",
            token: "eSr8Gu0pWSjv7tT4-EfHm7DFqn5Q2TDB8UONUbtR3Tu2KMEXN_tMp8anw_GUfmKHIiU8"
        })

        const Welcome = new MEssageEmbed()
        .setColor("RED")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} has left the community\n
        Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R> \nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Logger.send({embed: [Welcome]})
    }
}  