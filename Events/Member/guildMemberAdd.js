const { MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member){
        
        const{ user, guild } = member;
        
        member.roles.add("652831376780820480");   

        const Welcomer = new WebhookClient({
            id: "934757412311806002",
            token: "eSr8Gu0pWSjv7tT4-EfHm7DFqn5Q2TDB8UONUbtR3Tu2KMEXN_tMp8anw_GUfmKHIiU8"
        })

        const Welcome = new MEssageEmbed()
        .setColor("AQUA")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R> \nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embed: [Welcome]})
    }
}