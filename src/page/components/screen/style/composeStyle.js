import colors from '../../unit/colors';

module.exports = {
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    header: {
        flexDirection: "row",
        marginTop: 10
    },
    back: {
        marginLeft: 8,
        justifyContent: "center"
    },
    com: {
        marginLeft: 20
    },
    compose: {
        fontSize: 24
    },
    icn: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    attach: {
        marginRight: 24
    },
    send: {
        marginRight: 12
    },
    more: {
        marginRight: 8
    },
    froms: {
        flexDirection: "row",
        // elevation: 0.3,
        borderColor: "#EBEBEB",
        borderBottomWidth: 0.2,
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
        marginLeft: 4
    },
    to: {
        flexDirection: "row",
        // elevation: 0.3,
        borderBottomWidth: 0.2,
        borderColor: "#EBEBEB",
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 16,
    },
    to_child: {
        flexDirection: "row",
        // elevation: 0.3,
        borderBottomWidth: 0.2,
        borderColor: "#EBEBEB",
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 16,
        display: "none"
    },
    select: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    down: {
        marginRight: 24
    },
    textInput: {
        width: '80%',
        marginLeft: 20,
        fontSize: 16
    },
    sub: {
        width: '95%',
        fontSize: 18,
        padding: 10,
        paddingLeft: 4
    },
    from: {
        fontSize: 16,
        marginLeft: 4,
        marginRight: 10,
        color: "#6B6B6B"

    },
    picker: {
        width: "100%",
        height: 40
    },

}