package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func AllStats(c *gin.Context) {
	c.JSON(http.StatusOK, "WIP")
}

func SteamStats(c *gin.Context) {
	c.JSON(http.StatusOK, "massive virgin lol")
}
